# next.gitlab.com

This repository contains the static content for https://next.gitlab.com which allows users to
toggle whether they will be directed to the
[canary infrastructure](https://gitlab.com/gitlab-org/release/docs/blob/master/general/deploy/canary.md).

## How does it work?

When the switch is enabled a cookie `gitlab_canary=true` is set. Disabling this switch sets the cookie `gitlab_canary=false`.

In order to perform canary requests from e.g. `curl` do

```
curl --cookie gitlab_canary=true https://gitlab.com/
```

## Development

Assets are located in the `public/` directory, to test locally run:

```
make serve
```

point your browser to http://localhost:8000
