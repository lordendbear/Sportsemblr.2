import passwordHasher from './password-hasher';
import tokenManagerInit from './token-manager';

export default function (config) {
    return {
        passwordHasher,
        tokenManager: tokenManagerInit(config)
    };
}