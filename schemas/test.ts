// is there anything that isn't migrationTokenType NFT ?
import { CategoryInput } from "../components/CategoryInput";

export default {
  name: "test",
  title: "test",
  type: "document",
  fields: [
    {
      name: "test",
      title: "test",
      type: "string",
      components: {
        input: CategoryInput,
      },
    },
  ],
};
