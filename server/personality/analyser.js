
import dotenv from 'dotenv'
import PersonalityInsightsV3 from 'watson-developer-cloud/personality-insights/v3'
import PersonalityTextSummaries from 'personality-text-summary'

dotenv.config()

const personality = new PersonalityInsightsV3({
  username: process.env.PERSONALITY_INSIGHTS_USERNAME,
  password: process.env.PERSONALITY_INSIGHTS_PASSWORD,
  version_date: process.env.PERSONALITY_INSIGHTS_VERSION_DATE
});

const v3EnglishTextSummaries =  new  PersonalityTextSummaries({
  locale:  'en',
  version:  'v3'
});

const  getTextSummary = personalityProfile  => 
  v3EnglishTextSummaries.getSummary(personalityProfile)

export const getPersonalityInside = content => {
  const params = {
    content,
    content_type:  'text/plain',
    raw_scores:  true,
    consumption_preferences:  true
  }

  return personality.profile(params)
    .then(getTextSummary)
    .catch(error => error)
}

