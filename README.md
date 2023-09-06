# Tp-spacex-api - The app

[![docker-engine - >20.10.15](https://img.shields.io/badge/docker--engine->20.10.15-2496ED?logo=docker)](https://docs.docker.com/engine/release-notes/#201015)
[![docker-compose - >2.15.1](https://img.shields.io/badge/docker--compose->2.15.1-2496ED?logo=docker)](https://docs.docker.com/compose/release-notes/#2151)
[![npm - >9.3.0](https://img.shields.io/badge/npm->9.3.0-CB3837?logo=npm)](https://www.npmjs.com/package/npm)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### - Prerequisites

Please check that **you have Docker Desktop installed** on your computer. [Need help to install Docker Desktop?](https://docs.docker.com/desktop/install/windows-install/)

**We use docker compose** to manage our different services, we invite you to check that you have docker compose installed on your computer. [Need help to install Docker Compose?](https://docs.docker.com/compose/install/)

### - Install the app

1. Clone the repository

```bash
git clone git@github.com:FabienHP/Docker-TP.git
```

2. Enter in directory project

```bash
cd Docker-TP/
```

3. Setup your environment variable

```bash
cp .env.example .env
```

4. Well done! You can launch the project.

### - Launch the app

#### Development mode
```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

#### Production mode
```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build
```
*Add `-d` parameter at the end if you want to detach the container from your terminal*


**Down the app**
```bash
docker-compose down
```
*Add `-v` parameter at the end if you want to delete volume attached*

## Need help?

**If you encounter a technical problem**, we invite you to [create an issue](https://github.com/FabienHP/Docker-TP/issues) directly on this repository.

## License

Docker-TP is free software, and is release under the MIT license version 2022 or any later version. **See [LICENSE](LICENSE) for details.**
