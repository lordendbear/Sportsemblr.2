import React from 'react';
import TextInput from '../common/TextInput';

const EditEvent = ({ event, onSave, onChange, saving, errors }) => {
  return (
    <form>
      <TextInput
        name="title"
        label="Title"
        value={event.title}
        onChange={onChange}
        error={errors.title} />

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave} />
    </form>
  );
}

export default EditEvent;