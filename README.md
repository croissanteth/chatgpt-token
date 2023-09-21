### Prerequisites
Node.js
Hardhat development environment
An OpenAI API key

### Setup
Clone the repository. 
```npm install```
Create empty "contracts" folder.
Create .env file containing OPENAI_API_KEY, GOERLI_PRIVATE_KEY, and GOERLI_URL (RPC) and fill in the values

### Modifying GPT Interactions
To modify the interactions with GPT, refer to the deploygpt4.ts script inside the scripts directory:

API Key: Ensure your OpenAI API key is set in the .env file. The key is retrieved in the script at Line 11.
API Calls: The OpenAI API is called at Line 17 and Line 96. Modify the request body or headers as required to customize the GPT response.
DALL·E Interactions: If you wish to modify interactions with OpenAI's DALL·E model, refer to Line 277.

### Running locally
```npx hardhat run scripts/deploygpt4.ts```
### Deploy to blockchain
```npx hardhat run scripts/deploygpt4.ts --network GOERLI```
