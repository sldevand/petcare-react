import AbstractTextField from './AbstractTextField';

class FirstName extends AbstractTextField {

    constructor(props) {
        super(props);
        this.label = 'First name';
        this.name  = 'firstName';
        this.type  = 'text';
        this.validators = ['required', 'minStringLength:3', 'maxStringLength:64', 'matchRegexp:^[a-zA-Z-]*$'];
        this.errorMessages = ['This field is required', 'Minimum 3 characters', 'Maximum 64 characters', 'Lowercase and uppercase letters only'];
    }
}

export default FirstName
