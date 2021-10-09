export function validate({
    repository = '',
    buildCommand = '',
}) {
    const errors = {};

    if (!repository) {
        errors.repository = 'Please fill "GitHub repository" field'
    }

    if (!buildCommand) {
        errors.buildCommand = 'Please fill "Build command" field'

    }

    return errors;
}

export function formatDate(timestamp) {
    const months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ]

    const date = new Date(timestamp * 1000);
    const day = `0${date.getDate()}`.slice(-2);
    const month = months[date.getMonth()];
    const hours = `0${date.getDate()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);

    return {
        day,
        month,
        hours,
        minutes,
    }
}

export function getDuration(timestamp) {
    const diff = Date.now() - timestamp;
    const date = new Date(diff);
    const hours = `0${date.getDate()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);

    return {
        hours,
        minutes,
    }
}

