// TODO: add translations

export type Meaning = {
    partOfSpeech: string,
    definitions: Array<Definition>,
}

export type Definition = {
    definition: string,
    example: string,
    synonyms: Array<Word>,
    antonyms: Array<Word>,
    relatedWords?: Array<string>, 
}

export type Phonetic = {
    text: string,
    audio?: string,
}

export type Word = {
    word: string,
    meanings: Array<Meaning>,
    phonetics: Array<Phonetic>,
    origin?: string,
  };
  