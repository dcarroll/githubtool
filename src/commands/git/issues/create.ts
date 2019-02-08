import {core, flags, SfdxCommand} from '@salesforce/command';
import {AnyJson} from '@salesforce/ts-types';
import * as Octokit from '@octokit/rest';

// Initialize Messages with the current plugin directory
core.Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
const messages = core.Messages.loadMessages('githubtool', 'create');

export default class Create extends SfdxCommand {

  public static description = messages.getMessage('commandDescription');

  public static examples = [
  `$ sfdx git:issues:create --repo my-repo --owner dcarroll --title 'Title of the issue' --body 'This is the contents that explains the details of the issue'
  `
  ];

  public static args = [];

  protected static flagsConfig = {
    // flag with a value (-n, --name=VALUE)
    repo: flags.string({required: true, char: 'r', description: 'repo to add issue to'}),
    owner: flags.string({required: true, char: 'o', description: 'owner of the repo'}),
    title: flags.string({ required: true, char: 't', description: 'the title for the issue to be created'}),
    body: flags.string({ required: true, char: 'b', description: 'long form of the actual issue contents'})
  };

  // Comment this out if your command does not require an org username
  protected static requiresUsername = false;

  // Comment this out if your command does not support a hub org username
  protected static supportsDevhubUsername = false;

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = false;

  public async run(): Promise<AnyJson> {
    
    const octokit = new Octokit({ 
      auth: 'token ' + process.env.GITHUB_TOKEN,
      userAgent: 'octokit/rest.js v1.2.3',
      baseUrl: 'https://api.github.com'
    });
    octokit.issues.create({
      owner: this.flags.owner,
      repo: this.flags.repo,
      title: 'Test out this api',
      body: 'This is a test for the breaking change warning.'
    })
    return {};
  }
}
