import bcrypt from 'bcrypt-nodejs';

const hasher = {
    hashPassword: (password) => {
        const salt = bcrypt.genSaltSync(10);

        const hashedPassword = bcrypt.hashSync(password, salt);

        return hashedPassword;
    },
    verifyPassword: (hashedPassword, password) => {
        const isMatch = bcrypt.compareSync(password, hashedPassword);

        return isMatch;
    }
}

export default hasher;