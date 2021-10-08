export function validate({
    repository = '',
    buildCommand = '',
    period = 0,
}) {
    const errors = {};

    if (!repository) {
        errors.repository = 'Please fill "GitHub repository" field'
    }

    if (!buildCommand) {
        errors.buildCommand = 'Please fill "Build command" field'

    }

    if (typeof period !== 'number') {
        errors.branch = 'You can use numbers only'
    }

    return errors;
}
