import AbstractTextField from './AbstractTextField';

class Content extends AbstractTextField {

    constructor(props) {
        super(props);
        this.label = 'Content';
        this.name  = 'content';
        this.type  = 'textarea';
        this.validators = ['maxStringLength:2000'];
        this.errorMessages = ['Maximum 2000 characters'];
    }
}

export default Content
