import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";

const ContentSubmissionForm = ({
  campaign,
}: {
  campaign: { title: any; description: any };
}) => {
  const [content, setContent] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Here you would send the content and video link to your backend or API
    console.log("Submitted content:", content);
    console.log("Video link:", videoLink);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold">{campaign?.title}</h3>
      <p>{campaign?.description}</p>

      <div>
        <label>Video Link</label>
        <input
          value={videoLink}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setVideoLink(e.target.value)
          }
          placeholder="Paste your video link here"
          required
        />
      </div>
      <div>
        <label>Additional Comments</label>
        <input
          value={content}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setContent(e.target.value)
          }
          placeholder="Add any comments or notes (optional)"
        />
      </div>
      <Button type="submit">Submit Content</Button>
    </form>
  );
};

export default ContentSubmissionForm;
