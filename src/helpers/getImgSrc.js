const githubSrc = 'https://github.com/luispegasgomes/images/blob/main/profilepage'
const final = 'png?raw=true'

export function getIcon(name) {
    return `${githubSrc}/icons/${name}.${final}`;
}

export function getInstitutionLogo(name) {
    return `${githubSrc}/institutionLogos/${name}.${final}`;
}