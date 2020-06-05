
import PersonalityInsightsV3 from 'ibm-watson/personality-insights/v3'
import { IamAuthenticator } from 'ibm-watson/auth'
import PersonalityTextSummaries from 'personality-text-summary'


const personality = new PersonalityInsightsV3({
  authenticator: new IamAuthenticator({
    apikey: process.env.PERSONALITY_INSIGHTS_IAM_APIKEY,
  }),
  url: process.env.PERSONALITY_INSIGHTS_URL,
  version: '2019-10-13'
});

const v3EnglishTextSummaries =  new  PersonalityTextSummaries({
  locale:  'en',
  version:  'v3'
});

const  getTextSummary = personalityProfile  => 
  v3EnglishTextSummaries.getSummary(personalityProfile)

const getPersonalityInside = text => {
  const params = { 
    content: {
    contentItems: [{
        content: text,
        contenttype: "text/plain",
        id: `${Math.random() * 100}`,
        language: "en"
      }]
    }
  }
  return personality.profile(params)
    .then(response => getTextSummary(response.result))
    .catch(error => error)
}

export { getPersonalityInside }
