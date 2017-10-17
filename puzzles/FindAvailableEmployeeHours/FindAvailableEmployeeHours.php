<?php
class FindAvailableEmployeeHours {
    public $default_hours           = [];
    public $company_holidays        = [];
    public $employees               = [];
    public $employee_data           = [];
    public $find_hours_data         = [];
    public $raw_file;
    public $cleaned_file;

    /**
     * get_raw_file_contents() - Get raw contents from input file
     *
     * @return void
     */
    public function get_raw_file_contents()
    {
        $this->raw_file = file_get_contents('input.txt');
    }

    /**
     * clean_file() - Remove empty new lines & trailing spaces & header
     *
     * @return void
     */
    public function clean_file()
    {
        $this->raw_file = preg_replace('/^[ \t]*[\r\n]+/m', '', $this->raw_file);
        $cleaned_file  = explode("\n", $this->raw_file);
        $this->cleaned_file = array_filter($cleaned_file);
    }

    /**
     * parse_file() - Parse file contents into structured data for processing
     *
     * @return void
     */
    public function parse_file()
    {
        //Initialize variables for processing file
        $populate_employees    = false;
        $populate_availability = false;
        $employee_headers      = [];
        foreach($this->cleaned_file as $key => $value)
        {
            if (!empty($value) && $value != "\n") {
                //Remove all titles with availability in the name
                if (strpos($value, 'availability') !== false
                    && strpos($value, '# find availability for user and dates') != 0) {
                    continue;
                }
                //Populate $default_hours
                if (strpos($value, '# company work hours') !== false) {
                    $this->default_hours = explode(',', $this->cleaned_file[$key+1]);
                }
                //Populate $company_holidays
                if (strpos($value, '# company holidays') !== false) {
                    $this->company_holidays = explode(',', $this->cleaned_file[$key+1]);
                }
                //Populate $find_hours_data
                if (strpos($value, '# find availability for user and dates') !== false) {
                    $this->find_hours_data = explode(',', $this->cleaned_file[$key+1]);
                    break;
                }
                //Populate $employees for unlisted extra credit
                if (strpos($value, '#') !== 9
                    && ctype_alpha(substr($value, -2, -1))
                    && substr($value, -2, -1) !== ']'
                    && substr($value, 0, 1) !== '"'
                    ) {
                    if (strpos($value, '# employees') !== false || $populate_employees == true) {
                        if (strpos($value, '#') !== false && strpos($value, '# employees') !== 0) {
                            $populate_employees = false;
                            continue;
                        }
                        if (strpos($value, '# employees') !== 0) {
                            $row = explode(',', $this->cleaned_file[$key]);
                            if (!ctype_digit($row[0])) {
                                echo "Employee ID '" . $row[0] . "' is not numeric. Employee ID must be numeric." . PHP_EOL;
                                exit;
                            }
                            $this->employees[$row[0]] = $row[1];
                        }
                        $populate_employees = true;
                    }
                }

                //Run remaining rows through find_availabile_work_hours
                if ((substr($value, -1) == ']'
                    || substr($value, -1) == '"')
                ) {
                    //Get employee id for organization sake
                    $sub_val = explode(',', $value);
                    //Seperate hours from non-hours
                    $hours = trim(substr($value, strpos($value, ',[')));
                    $value = str_replace($hours, '', $value);
                    //Clean the hours array
                    $hours = ltrim($hours, ',');
                    $hours = rtrim($hours, ']');
                    $hours = ltrim($hours, '[');
                    if (strpos($hours, '"') !== false) {
                        $hours = null;
                    }
                    //Populate array to cycle through find_availabile_work_hours
                    $this->employee_data[] =
                    [
                        $sub_val[0], //Employee ID
                        $sub_val[1], //From
                        $sub_val[2] === 'null' ? null : $sub_val[2], //To
                        !empty($hours) ? explode(',', $hours) : null //Hours array
                    ];
                }
            }
        }
    }

    /**
     * process_employee_data() - Loop through structured employee data to prepare for output
     *
     * @return void
     */
    public function process_employee_data()
    {
        $this->find_availabile_work_hours(
            $this->find_hours_data[0],
            $this->find_hours_data[1],
            $this->find_hours_data[2]
        );
    }

    /**
     * find_availabile_work_hours() - Return employee hours for days within range
     *
     * @param string $employee_id --
     * @param string $from        From Date - Starting date in range
     * @param string $to          To Date - Ending date in range. Can be null, on null, will treat as 1 date
     *
     * @return void
     */
    public function find_availabile_work_hours($employee_id, $from, $to)
    {
        //Remove quotes
        $from = str_replace('"', '', $from);
        $to   = str_replace('"', '', $to);
        foreach($this->company_holidays as $holiday) {
            $this->company_holidays[] = str_replace('"', '', $holiday);
        }
        //Make sure that the $to date is later than the $from date
        if (!empty($to)
            && strtotime($to) < strtotime($from)) {
            echo "The $to date is less than the $from date. The $to date must be greater than the $from date.";
            exit;
        }
        //Validate employee ID as a numeric value
        if (!ctype_digit($employee_id)) {
            echo "Employee ID '" . $employee_id . "' is not numeric. Employee ID must be numeric." . PHP_EOL;
            exit;
        }
        //Make this this employee id is part of employee data
        if (!isset($this->employees[$employee_id])) {
            echo "Employee ID " . $employee_id . " is invalid. Please use a valid employee ID." . PHP_EOL;
            exit;
        }
        //Get only employee ID specific data for looping
        $employee_specific_data = array_map(
            function($item) use ($employee_id) {
                if ($item[0] == $employee_id) {
                    return $item;
                }
            },
            $this->employee_data
        );

        //Get array of dates for date range
        $date_range = $this->get_dates($from, $to);
        //Get compiled array of all employee availability
        $employee_date_range = [];
        foreach($employee_specific_data as $employee) {
            if (!empty($employee[2])) {
                //Initialize
                $start = str_replace('"', '', $employee[1]);
                $end = str_replace('"', '', $employee[2]);
                $override = $employee[3];
                //Merge employee availability
                $employee_date_range = array_merge($employee_date_range, $this->get_dates($start, $end, $override));
            } else {
                //Handle empty $to date
                $start = str_replace('"', '', $employee[1]);
                $day_of_week = date('w', strtotime($start));
                $hour = !empty($override) ? $override[$day_of_week] : $this->default_hours[$day_of_week];
                $employee_date_range[] = $start . ", " . $hour;
            }
        }
        //Print out result of cross referencing dates
        $employee_date_range = array_filter($employee_date_range);
        foreach($date_range as $employee_date => $val) {
            if (array_key_exists($employee_date, $employee_date_range)) {
                $hour = $employee_date_range[$employee_date];
                if (in_array(substr($employee_date, 0, 5), $this->company_holidays)) {
                    $hour = 0;
                }
                print_r('"' . $employee_date . '", ' . $hour . PHP_EOL);
            } else {
                $day_of_week = date('w', strtotime($employee_date));
                $hour = $this->default_hours[$day_of_week];
                if (in_array(substr($employee_date, 0, 5), $this->company_holidays)) {
                    $hour = 0;
                }
                print_r('"' . $employee_date . '", ' . $hour . PHP_EOL);
            }
        }

    }

    /**
     * get_dates() - Return array of dates and availabile hours given a date range and hour overrides
     *
     * @param string $startTime Start    - Starting date in range
     * @param string $endTime   End      - Ending date in range. Can be null, on null, will treat as 1 date
     * @param array  $override  Override - Array of hours, can be null
     *
     * @return void
     */
    public function get_dates($startTime, $endTime, $override = null)
    {
        $day = 86400;
        $format = 'm/d/Y';
        $startTime = strtotime($startTime) - 1;
        $endTime = strtotime($endTime);
        $numDays = round(($endTime - $startTime) / $day) + 2;
        $days = [];
        if (!empty($override)) {
            for ($i = 1; $i < $numDays; $i++) { //change $i to 1
                $date = date($format, ($startTime + ($i * $day)));
                $start_day = date('w', strtotime($date));
                $start_hour = $override[$start_day];
                $days[date($format, ($startTime + ($i * $day)))] = $start_hour;
            }
        } else {
            for ($i = 1; $i < $numDays; $i++) { //change $i to 1
                $date = date($format, ($startTime + ($i * $day)));
                $days[date($format, ($startTime + ($i * $day)))] = '0';
            }
        }
        return $days;
    }

}
$employee_hours = new FindAvailableEmployeeHours;
$employee_hours->get_raw_file_contents();
$employee_hours->clean_file();
$employee_hours->parse_file();
$employee_hours->process_employee_data();

?>
