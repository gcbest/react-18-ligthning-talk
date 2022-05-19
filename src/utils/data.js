import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 4,
      min: 2
    },
    wordsPerSentence: {
      max: 6,
      min: 3
    }
  });

export const generatePosts = () => {
    const products = [];
    for (let i = 0; i < 8000; i++) {
      products.push({id: i, title: `#${i+1} ${lorem.generateSentences(1)}`, body: `${lorem.generateParagraphs(2)}`, author: i % 2 === 0 ? 'Alice' : 'Bob'});
    }
    return products;
  }