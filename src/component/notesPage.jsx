'use strict';

import React from 'react';
import NoteList from './noteList.jsx';
import Dashboard from './NoteCreateForm.jsx';
// import NoteForm from './noteCreateForm';

class Notes extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes : [
      {id:'1', title:'bla', content:'blablabla'},
      {id:'1', title:'bla', content:'blablabla'},
      {id:'1', title:'bla', content:'blablabla'}
    ]}
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    
 
  }

  addNote(note) {
    console.log('new note', note);
    this.state.notes.push(note);
    this.setState({note: this.state.note});

  }

  removeNote(index) {
    console.log('page removing', index);
    this.state.notes.splice(index, 1);
    this.setState({note: this.state.note});
  }

  render(){
    return <div>
  
      <Dashboard addNote={this.addNote}/>
      <NoteList notes={this.state.notes}
        removeNote={this.removeNote}
      />
      
  

  </div>
  }
}

export default Notes;