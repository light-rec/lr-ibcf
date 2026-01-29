# LightRec

**LightRec** is a lightweight, in-memory **item-based collaborative filtering recommendation engine** built in JavaScript.  
It's designed as a hobby project to demonstrate recommendation algorithms with simplicity and speed.  

---

## Features

- Item-based collaborative filtering
- In-memory user-item interaction storage
- Similarity calculation using cosine similarity
- Fast top-N recommendations per user
- Easy to feed data and extend

---

## Installation & Usage

1. Install:
   ```bash
   npm install lightrec
   ```
2. Import and Initialize
    ```js
    import { RecEngine } from 'lightrec';

    // Create a new recommendation engine
    const engine = new RecEngine();
    ```

Now if you already have your interaction data, you can train this engine via `feed()`.

3. Feed
    ```js
    const interactions = [
        { userId: 'u1', itemId: 'i1', points: 5 },
        { userId: 'u1', itemId: 'i2', points: 3 },
        { userId: 'u2', itemId: 'i1', points: 4 },
    ]; // Your interaction data

    engine.feed(interactions); 
    ```
    
And for single interactions you can use `act()`.

4. Act
    ```js
    const data = {itemId:'i1', userId:'u1', points:3}
    engine.act(data.itemId, data.userId, data.points)
    ```

Note that the points should be determined by you. Like: for view 1 point, for purchase 3 point etc.

Now, when you want to recommend items for a user use `recommendForUser()`

5. Recommend For User
    ```js
    const recommendations = engine.recommendForUser('u1', 5);
    console.log(recommendations); // ['i3', 'i4', 'i5', ...]
    ```

### Ideal Use Cases

- Simple recommendation engines for hobby projects
- Small e-commerce or content platforms
- Educational purposes and learning collaborative filtering
- Rapid prototyping without heavy infrastructu

---

## How It Works

1. **User-Item Interactions (`act`)**  
   Each user can interact with an item by giving it a score/points. The engine records these in an **item-user matrix**.

2. **Similarity Matrix (`buildItemSimilarity`)**  
   The engine calculates pairwise **item similarities** using cosine similarity. This allows it to find items similar to ones a user likes.

3. **Recommendations (`recommendForUser`)**  
   For a given user, LightRec aggregates candidate items from the similarity matrix, weighting by the userâs interaction points.  
   The top-N items are returned as recommendations.

4. **Batch Feeding (`feed`)**  
   Feed a dataset of interactions to populate the engine efficiently. This builds the similarity matrix and prepares recommendations.s


### Contribute & Contact

I built **LightRec** as a hobby project, and contributions are very welcome!  

**How to Contribute:**  
- Fork the repository  
- Create your feature branch (`git checkout -b feature-name`)  
- Commit your changes (`git commit -m 'Add some feature'`)  
- Push to the branch (`git push origin feature-name`)  
- Open a Pull Request  

**Contact Me:**  
- GitHub: [Muktadirul675](https://github.com/Muktadirul675)  
- Email: muktadirul.05@gmail.com

Feel free to open issues, suggest improvements, or just say hi! 
