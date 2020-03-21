import AbstractTextField from './AbstractTextField';

class Password extends AbstractTextField {

    constructor(props) {
        super(props);
        this.label = 'Password';
        this.name  = 'password';
        this.type  = 'password' 
        this.validators = ['required', 'minStringLength:8', 'maxStringLength:255'];
        this.errorMessages = ['this field is required', 'Minimum 8 characters', 'Maximum 255 characters'];
    }
}

export default Password
