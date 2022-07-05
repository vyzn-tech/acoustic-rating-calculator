const ACOUSTIC_RATING_LEVEL_MINIMUM = 'Mindestanforderungen'
const ACOUSTIC_RATING_LEVEL_ENHANCED = 'Erhoehte Anforderungen'
const ACOUSTIC_RATING_LEVELS = <const>[ACOUSTIC_RATING_LEVEL_MINIMUM, ACOUSTIC_RATING_LEVEL_ENHANCED]
type AcousticRatingLevel = typeof ACOUSTIC_RATING_LEVELS[number]

export { ACOUSTIC_RATING_LEVEL_MINIMUM, ACOUSTIC_RATING_LEVEL_ENHANCED, ACOUSTIC_RATING_LEVELS, AcousticRatingLevel }