import React from 'react';
import '../App.css';

class EditNote extends React.Component {
    constructor() {
        super();
        this.state = {
            note: '',
            title: '',
            textBody: '',
            _id: ''
        };
    }

    componentDidMount() {
        const note = this.props.notes.find(note => `${note._id}` === this.props.match.params._id);
        
        if (note !== undefined) {
            this.setState({
                title: note.title,
                textBody: note.textBody,
                _id: note._id,
            })
        }
        
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }


    render() {
        return (
            <section className = 'page-header'>
                <form onSubmit = {this.props.editNote(this.state._id, {title: this.state.title, textBody: this.state.textBody})}>
                    <input 
                        className = 'input'
                        name = 'title'
                        type = 'text'
                        placeholder = 'note title'
                        onChange = {this.handleChange}
                        value = {this.state.title}
                        />
                    
                    
                    <textarea
                        className = 'text-area' 
                        name = 'textBody'
                        placeholder = 'content' 
                        rows = '25' cols = '50'
                        onChange = {this.handleChange}
                        value = {this.state.textBody}
                    />
                
                    <button>update</button>
                </form>
            </section>        
        )
    }
}

export default EditNote;