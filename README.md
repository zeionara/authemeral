# Authemeral

Insomnia plugin for automatic token generation for requests using authentication service

## Installation

1. Go to your folder with plugins, for example:

```sh
cd /home/zeio/snap/insomnia/204/.config/Insomnia/plugins/
```

2. Clone this repo:

```sh
git clone https://github.com/zeionara/authemeral.git
```

3. Go to the project folder and install dependencies:

```sh
cd authemeral
npm install
```

4. Open `Insomnia`, then navigate to `Application > Preferences > Plugins` to make sure that plugin is loaded;
5. Use template tag `Authentication token` wherever you need passing data required for locating and accessing the authentication service. This template tag will be replaced with an actual token upon request execution.
