import AbstractTextField from './AbstractTextField';

class Email extends AbstractTextField {

    constructor(props) {
        super(props);
        this.label = 'Email';
        this.name  = 'email';
        this.type  = 'text';
        this.validators = ['required', 'isEmail'];
        this.errorMessages = ['This field is required', 'Email is not valid'];
    }
}

export default Email
