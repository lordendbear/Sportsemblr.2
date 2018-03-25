import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const PlaceForm = ({ place, onSave, onChange, saving, errors }) => {
    return (
        <form>
            <TextInput
                name="name"
                label="name"
                value={place.name}
                onChange={onChange}
                error={errors.name} />

            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave} />
        </form>
    );
};

PlaceForm.propTypes = {
    place: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
};

export default PlaceForm;