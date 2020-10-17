# blog_server

> Clone project

```zsh
git clone git@github.com:hoangduc97/blogs.git
```

## development

> run command init node_modules

```zsh
docker run --rm -v $(pwd)/client:/app -w /app node yarn install && docker run --rm -v $(pwd)/api:/app -w /app node yarn install
```

> build container

```zsh
docker-compose up -d --build
```
