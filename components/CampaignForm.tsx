import { useState } from "react";
import { Button } from "@/components/ui/button";

const CampaignForm = ({ onSubmit }: any) => {
  const [formData, setFormData] = useState({
    brand: "",
    title: "",
    description: "",
    productId: "",
    productLink: "",
    reward: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Brand</label>
        <input
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          placeholder="Brand name"
          required
        />
      </div>
      <div>
        <label>Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Campaign title"
          required
        />
      </div>
      <div>
        <label>Description</label>
        <input
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Campaign description"
          required
        />
      </div>
      <div>
        <label>Product ID</label>
        <input
          name="productId"
          value={formData.productId}
          onChange={handleChange}
          placeholder="Product ID"
          required
        />
      </div>
      <div>
        <label>Product Link</label>
        <input
          name="productLink"
          value={formData.productLink}
          onChange={handleChange}
          placeholder="Product link"
          required
        />
      </div>
      <div>
        <label>Reward</label>
        <input
          name="reward"
          value={formData.reward}
          onChange={handleChange}
          placeholder="Campaign reward"
          required
        />
      </div>
      <Button type="submit">Create Campaign</Button>
    </form>
  );
};

export default CampaignForm;
