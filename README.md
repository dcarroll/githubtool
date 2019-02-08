githubtool
==========

## Note: you will need to set an environment variable named GITHUB_TOKEN that contains your personal github token.
```sh-session
$ export GITHUB_TOKEN="31232652407123470789"
```

<!-- toc -->

<!-- tocstop -->
<!-- install -->
<!-- usage -->
```sh-session
$ npm install -g githubtool
$ githubtool COMMAND
running command...
$ githubtool (-v|--version|version)
githubtool/0.0.0 darwin-x64 node-v10.4.0
$ githubtool --help [COMMAND]
USAGE
  $ githubtool COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`githubtool git:issues:create`](#githubtool-gitissuescreate)

## `githubtool git:issues:create`

Add an issue to a github repo with title and body

```
USAGE
  $ githubtool git:issues:create

OPTIONS
  -b, --body=body                                 (required) long form of the actual issue contents
  -o, --owner=owner                               (required) owner of the repo
  -r, --repo=repo                                 (required) repo to add issue to
  -t, --title=title                               (required) the title for the issue to be created
  --json                                          format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)  logging level for this command invocation

EXAMPLE
  $ sfdx git:issues:create --repo my-repo --owner dcarroll --title 'Title of the issue' --body 'This is the contents 
  that explains the details of the issue'
```

_See code: [src/commands/git/issues/create.ts](https://github.com/dcarroll/githubtool/blob/v0.0.0/src/commands/git/issues/create.ts)_
<!-- commandsstop -->
