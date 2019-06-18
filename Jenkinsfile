#!groovy
def slackSettings = [ enableSlackNotification: true,
  slackTokenID: 'ecxio-slack',
  slackChannel: 'ui-tf_v2-healthcheck',
  slackBaseURL: 'https://ibm-ecxio.slack.com/services/hooks/jenkins-ci/']

def gitSettings = [ defaultGitUserCredID: 'build.devops',
                    defaultGitRepo: 'https://stash.ecx.io/scm/qa/webdriverio.git',
                    pipelineGitRepo: 'https://stash.ecx.io/scm/qa/webdriverio.git']

def globalSettings = [  userInputTimeout: 260000,
extendedMessageInfo: '']

def lib = library('helper').io.ecx
def ecxHelper = lib.ECXHelperWindows.new(this)
def errors = lib.errors.ErrorHandler.new(this)
def errorMessage = ''

try
{
    stage('Self Check')
    {
      node('master')
      {
        try
        {
          wrap([$class: 'BuildUser'])
          {
            env.userFullName = "${BUILD_USER}"
          }
        }
        catch (Exception ex)
        {
          env.userFullName = "Jenkins"
        }
        if (slackSettings.enableSlackNotification)
        {
          slackSend baseURL: "${slackSettings.slackBaseURL}", botUser: true, teamDomain: 'ibm-ecxio.slack.com', tokenCredentialId: "${slackSettings.slackTokenID}", channel: "${slackSettings.slackChannel}", color: "good", message: "${env.JOB_NAME}: started by user: ${env.userFullName}\n for branch: ${env.BRANCH_NAME} (<${env.RUN_DISPLAY_URL}|Open>)"
        }
        echo "====== Checking ${env.BRANCH_NAME} ======"
        build job: 'WebdriverIO', parameters: [listGitBranches(name: 'gitbranch', value: "${env.BRANCH_NAME}")]
      }
    }
  }
  catch (Exception exception)
  {
    errorMessage = exception.getMessage()
    errors.defaultHandler(exception, slackSettings)
  }
  finally
  {
    stage('Finalisation')
    {
      ecxHelper.defaultFinalisation(['master'], errorMessage, slackSettings)
    }
  }
