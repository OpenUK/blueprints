# blueprints
> A repository for OpenUK's published blueprints and the process for creating the blueprints.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![GitHub issues](https://img.shields.io/github/issues/OpenUK/blueprints)
![licence](https://img.shields.io/badge/licence-Apache%20(Code),%20CDLA%20(Data),%20CCBYSA2.0%20(Narrative)-blue)
![GitHub Repo stars](https://img.shields.io/github/stars/OpenUK/blueprints?style=social)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant%20Adapted-2.0-4baaaa.svg)](https://openuk.uk/wp-content/uploads/2020/08/Code-of-respect-Final-Aug-20.pdf)
[![Built with Astro](https://astro.badg.es/v1/built-with-astro/tiny.svg)](https://astro.build)



## Licencing
Code released under the [Apache Licence 2.0](https://www.apache.org/licenses/LICENSE-2.0.html).

Datasets released under [CDLA permissive 2.0](https://cdla.dev/permissive-2-0/).

Narrative and text released under [Creative Commons Attribution-ShareAlike 2.0 Generic (CC BY-SA 2.0.)](https://creativecommons.org/licenses/by-sa/2.0/)

## Built With
The underlying blueprints are encoded as YAML files.

The blueprints are validated against a schema using AJV and JS-YAML.

The blueprints are rendered at [https://openuk.github.io/blueprints/](https://openuk.github.io/blueprints/) using TypeScript, Node & AstroJS, styled with TailwindCSS, and hosted on GitHub Pages.

### Usage
If you want to develop locally, you will require an installation of nodejs.

```bash
cd src
npm install
npm run dev
```

## Contributing
Contributions are welcome. See information on [contributing](./CONTRIBUTING.md), as well as our OpenUK [code of respect](https://openuk.uk/wp-content/uploads/2020/08/Code-of-respect-Final-Aug-20.pdf). All commits should be signed with the [Developer Certificate of Origin](https://developercertificate.org/).