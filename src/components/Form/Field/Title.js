import AbstractTextField from './AbstractTextField';

class Title extends AbstractTextField {

    constructor(props) {
        super(props);
        this.label = 'Title';
        this.name  = 'title';
        this.type  = 'text';
        this.validators = ['required', 'minStringLength:3', 'maxStringLength:64', 'matchRegexp:^[a-zA-Z-_ 0-9]*$'];
        this.errorMessages = ['This field is required', 'Minimum 3 characters', 'Maximum 64 characters', 'Lowercase,uppercase letters and digits only'];
    }
}

export default Title
