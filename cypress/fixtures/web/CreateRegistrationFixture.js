import { faker } from '@faker-js/faker';
import { br } from 'faker-br';

const generateCellphone = () => {
    const number = faker.string.numeric(9);
    return `(11)9 ${number.slice(0, 5)}-${number.slice(5)}`;
};

const CreateRegistrationFixture = {
    name: faker.person.fullName().replace(/[^a-zA-Z\s]/g, ''),
    cpf: br.cpf(),
    email: faker.internet.email(),    
    cellPhone: generateCellphone(),
    password: faker.string.nanoid(),
};

export default CreateRegistrationFixture;