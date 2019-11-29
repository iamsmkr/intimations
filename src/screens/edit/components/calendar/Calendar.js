import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'react-native-calendars';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-root-toast';
import moment from 'moment';

import HolidaysContainer from '../../../../common/components/holidays/HolidaysContainer';

export default ({ holidays }) => {

    const holidaysRef = useRef();

    const updateHolidaysMonthYear = (month, year, show) => {
        holidaysRef.current.updateMonthYear(month, year, show);
    }

    const [markedDates, setMarkedDates] = useState({});

    const [showToast, setShowToast] = useState(false);

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();

    useEffect(() => {
        setMarkedDates({
            ..._getDatesMarkedAsHolidays(holidays, currentMonth, currentYear)
        });

        updateHolidaysMonthYear(currentMonth, currentYear, true);
    }, []);

    const onMonthChange = e => {
        let month = e.month;
        let year = e.year;

        updateHolidaysMonthYear(month, year, true);

        setMarkedDates({
            ..._getDatesMarkedAsHolidays(holidays, month, year)
        });
    }

    const onDayPress = e => {
        if (moment(e.dateString).format('l') < moment().format('l')) {
            setTimeout(() => setShowToast(true), 500);
            setTimeout(() => setShowToast(false), 5000);
        }
    }

    return (
        <>
            <Calendar
                style={styles.calendar}
                markedDates={markedDates}
                onMonthChange={onMonthChange}
                onDayPress={onDayPress}
                markingType={'multi-dot'}
                theme={{
                    'stylesheet.day.multiDot': {
                        dot: {
                            width: 8,
                            height: 8,
                            marginTop: 1,
                            marginLeft: 1,
                            marginRight: 1,
                            borderRadius: 2,
                            opacity: 0
                        }
                    }
                }}
            />

            <HolidaysContainer ref={holidaysRef} />

            <Toast
                visible={showToast}
                position={-30}
                opacity={1}
                backgroundColor={'#E70000'}
                shadow={true}
                animation={false}
                hideOnPress={false}
            >
                {TOASTS['Create']}
            </Toast>
        </>
    );
}

const TOASTS = {
    Create: "Intimations can't be created for dates in the past. Please select dates in present or from future.",
    Update: "Intimations in the past can't be modified. Please select dates in present or from future."
};

const styles = StyleSheet.create({
    calendar: {
        width: 370,
        borderWidth: 1,
        borderColor: '#D8DADA',
        borderRadius: 10,
        paddingBottom: 15,
        marginTop: 15
    }
});

const _getDatesMarkedAsHolidays = (holidays, month, year) => {
    let _markedDates = {};

    if (holidays && holidays[0][year] && holidays[0][year][month]) {
        let data = holidays[0][year][month];
        data.forEach(holiday =>
            _markedDates[`${year}-${month}-${holiday.Date}`] = {
                dots: [{ color: '#E5B001', borderColor: '#E5B001' }]
            }
        );
    }

    return _markedDates;
}
