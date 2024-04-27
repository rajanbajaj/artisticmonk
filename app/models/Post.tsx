import { Post } from "./types/Post";    

const data: Array<Post> = [
  {
    id: "61c6adf996d25900172fbd05",
    status: "PUBLIC",
    title: "System Design",
    coverImage: {
      src: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      alt: "Shoes",
    },
    summary: "The content outlines the elements and importance of system design, including logical, physical, architectural design, and documentation types.",
    body:"<p style=\"margin-bottom: 1.382em; padding: 0px; color: rgb(77, 89, 104); line-height: 2; font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; font-size: 18px;\">Some of the elements are as followed –</p><ol style=\"margin: 0px 0px 1.618em 4rem; padding: 0px; color: rgb(77, 89, 104); line-height: 2; font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; font-size: 18px;\"><li style=\"list-style-type: decimal; line-height: 2;\">Design and redesign of business processes.</li><li style=\"list-style-type: decimal; line-height: 2;\">Defining Data Models.</li><li style=\"list-style-type: decimal; line-height: 2;\">Defining the events and their procedure.</li><li style=\"list-style-type: decimal; line-height: 2;\">Designing of Applications.</li><li style=\"list-style-type: decimal; line-height: 2;\">Designing how the different services, processes, events, and data will work together.</li><li style=\"list-style-type: decimal; line-height: 2;\">Defining how the system will be secured</li><li style=\"list-style-type: decimal; line-height: 2;\">Defining the technologies that will be used, such as applications, components, toolsets, APIs, and libraries.<br></li></ol><div><h3 style=\"font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; line-height: 1.2; margin: 0px 0px 0.382em; font-size: 1.8em; position: relative; padding: 0px 0px 0px 20px; color: rgb(35, 44, 57); font-weight: 700 !important;\">The various subsets of System Design</h3></div><div><h4 style=\"font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; line-height: 1.2; margin: 0px 0px 0.382em; font-size: 1.5em; color: rgb(19, 117, 176); letter-spacing: normal; font-weight: 700 !important;\">&nbsp; &nbsp; 1. Logical Design:</h4></div><div><span style=\"color: rgb(77, 89, 104); font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; font-size: 18px;\">&nbsp; &nbsp; &nbsp;The data flow and E-R diagrams are used, respectively.</span></div><div><h4 style=\"font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; line-height: 1.2; margin: 0px 0px 0.382em; font-size: 1.5em; color: rgb(19, 117, 176); letter-spacing: normal; font-weight: 700 !important;\">&nbsp; &nbsp;&nbsp;</h4><h4 style=\"font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; line-height: 1.2; margin: 0px 0px 0.382em; font-size: 1.5em; color: rgb(19, 117, 176); letter-spacing: normal; font-weight: 700 !important;\">&nbsp; &nbsp; 2. Physical Design</h4></div><div>&nbsp; &nbsp; &nbsp;&nbsp;<span style=\"color: rgb(77, 89, 104); font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; font-size: 18px;\">The main criteria of physical design are to manage how the data is verified, processed, and displayed as a result.</span><span style=\"color: rgb(77, 89, 104); font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; font-size: 18px;\">&nbsp;</span></div><div><br></div><h4 style=\"font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; line-height: 1.2; margin: 0px 0px 0.382em; font-size: 1.5em; color: rgb(19, 117, 176); letter-spacing: normal; font-weight: 700 !important;\">&nbsp; &nbsp; 3. Architectural Design</h4><div>&nbsp; &nbsp; &nbsp; <font color=\"#4d5968\" face=\"Nunito Sans, -apple-system, blinkmacsystemfont, Segoe UI, roboto, helvetica, arial, sans-serif\"><span style=\"font-size: 18px;\">High-Level Design</span></font></div><div><font color=\"#4d5968\" face=\"Nunito Sans, -apple-system, blinkmacsystemfont, Segoe UI, roboto, helvetica, arial, sans-serif\"><span style=\"font-size: 18px;\"><br></span></font></div><div><h4 style=\"font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; line-height: 1.2; margin: 0px 0px 0.382em; font-size: 1.5em; color: rgb(19, 117, 176); letter-spacing: normal; font-weight: 700 !important;\">&nbsp; &nbsp; 4. Detailed Design</h4></div><div><br></div><div>&nbsp; &nbsp;&nbsp;<span style=\"color: rgb(77, 89, 104); font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; font-size: 18px;\">There are four main types of documentation that follow with System Design-</span></div><p style=\"margin-bottom: 1.382em; padding: 0px; color: rgb(77, 89, 104); line-height: 2; font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; font-size: 18px;\"><ol><li><span style=\"font-weight: 700 !important;\">Program Documentation:&nbsp;</span>It explains the inputs, outputs, and processing logic for all the program courses.</li><li><span style=\"font-weight: 700 !important;\">System Documentation:&nbsp;</span>It describes the system functions and the way they are implemented.</li><li><span style=\"font-weight: 700 !important;\">Operations Documentation:&nbsp;</span>It explains the program, system analyst, programmer, and system identification.</li><li><span style=\"font-weight: 700 !important;\">User Documentation:&nbsp;</span>It includes steps and information to the users who will communicate with the system.</li></ol><div></div></p><h3 style=\"font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; line-height: 1.2; margin: 0px 0px 0.382em; font-size: 1.8em; position: relative; padding: 0px 0px 0px 20px; color: rgb(35, 44, 57); font-weight: 700 !important;\">Why should we use System Design?</h3><div><br></div><h4 style=\"font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; line-height: 1.2; margin: 0px 0px 0.382em; font-size: 1.5em; color: rgb(19, 117, 176); letter-spacing: normal; font-weight: 700 !important;\">&nbsp; &nbsp; 1. Reliability</h4><div><h4 style=\"font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; line-height: 1.2; margin: 0px 0px 0.382em; font-size: 1.5em; color: rgb(19, 117, 176); letter-spacing: normal; font-weight: 700 !important;\">&nbsp; &nbsp; 2. Scalability</h4></div><div><h4 style=\"font-family: &quot;Nunito Sans&quot;, -apple-system, blinkmacsystemfont, &quot;Segoe UI&quot;, roboto, helvetica, arial, sans-serif; line-height: 1.2; margin: 0px 0px 0.382em; font-size: 1.5em; color: rgb(19, 117, 176); letter-spacing: normal; font-weight: 700 !important;\">&nbsp; &nbsp; 3. Maintainability</h4></div>",
    tags: ["system design", "CSE"],
    createdAt: Date.now(),
    updatedAt: Date.now(),
    publishedAt: Date.now(),
  },
  {
    id: "61bc2d5b880b27001750dda2",
    status: "PUBLIC",
    title: "Setup supervisor in ubuntu",
    coverImage: {
      src: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      alt: "Shoes",
    },
    summary: "The content provides instructions for installing, enabling, starting, and checking the status of the Supervisor process manager on a Linux system.",
    body:"<font face=\"Courier New\">$ sudo apt install supervisor</font><div><font face=\"Courier New\">$ sudo systemctl enable supervisor</font></div><div><font face=\"Courier New\">$ sudo systemctl start supervisor</font></div><div><font face=\"Courier New\">$ sudo systemctl status supervisor</font></div>",
    tags: ["Ubunut", "CSE"],
    createdAt: Date.now(),
    updatedAt: Date.now(),
    publishedAt: Date.now(),
  },
  {
    id: "61b4a64d9cd73c0017110b89",
    status: "PUBLIC",
    title: "NFT: My Openseea profile",
    coverImage: {
      src: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      alt: "Shoes",
    },
    summary: "The content provides instructions for installing, enabling, starting, and checking the status of the Supervisor process manager on a Linux system.",
    body:"<h3>NFT: What is it?</h3><div>NFT stands for Non Fungible Tokens. It is a block created on the blockchain which contains digital information</div><div>related to the documents or data uploaded to it. These tokens are similar to a mined/minted Crypto coin but the</div><div>major difference is that for a particular cryptocurrency all the coins have same value at a moment but the price</div><div>of NFT is decided by the owner of NFT. And It could be traded similar to cryptocurrency.</div><div><br></div><h3>My Opensea profile&nbsp;</h3><div>Opensea is a platform working on Etherium blockchain which enables its user to create/buy/sell NFTs.</div><div><br></div><div><font size=\"6\"><b>My Opensea account link is&nbsp;</b><span style=\"color: rgb(53, 56, 64); font-family: Poppins, sans-serif; white-space: pre;\"><a href=\"https://opensea.io/rbajaj97\" style=\"\">https://opensea.io/rbajaj97</a></span></font></div><div><font size=\"6\">NFT offered:</font><span style=\"color: rgb(53, 56, 64); font-family: Poppins, sans-serif; font-size: 15px; white-space: pre;\"><a href=\"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/69862020656955248297786459108788400004798441256368752515435720288672652722276/\">https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/69862020656955248297786459108788400004798441256368752515435720288672652722276/</a></span></div>",
    tags: ["NFT", "Opensea"],
    createdAt: Date.now(),
    updatedAt: Date.now(),
    publishedAt: Date.now(),
  }
];

export const postModel = {
  first: (): Post => {
    return data[0];
  },
  getPostById: (id: string | null): Post | undefined => {
    if (id === null) return undefined;
    return data.find(post => post.id === id);
  },
  getPosts: (): Post[] => {
    return data;
  },
  addPost: async (post: Post): Promise<Post[]> => {
    data.push(post);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });
  }
};
  

