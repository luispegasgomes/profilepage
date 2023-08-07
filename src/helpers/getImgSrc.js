const githubSrc = 'https://github.com/luispegasgomes/images/blob/main/profilepage'
const final = 'png?raw=true'

export function getIcon(name) {
    return `${githubSrc}/icons/${name}.${final}`;
}

export function getInstitutionLogo(name) {
    return `${githubSrc}/institutionLogos/${name}.${final}`;
}

export function getSkillIcon(text, name, color) {
    return `https://img.shields.io/badge/${text}?style=for-the-badge&logo=${name}&logoColor=${color}`;
}


export function getCertificateImage(name) {
    return `https://github.com/luispegasgomes/images/blob/main/profilepage/certificates/${name}.png?raw=true`;
}
