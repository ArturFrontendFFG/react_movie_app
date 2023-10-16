import { useSocial } from "../../../hook/queries/useSocial";
import "./People.scss";
import {
  transformFacebook,
  transformHomepage,
  transformInstagram,
  transformTikTok,
  transformTwitter,
  transformWikidata,
  transformYoutube,
} from "./TransformSocial";

const Social = ({ id, homepage, query }) => {
  const { data, isLoading, error } = useSocial(query);
  if (isLoading) return;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="aside__socials">
      {transformInstagram(data)}
      {transformYoutube(data)}
      {transformFacebook(data)}
      {transformTikTok(data)}
      {transformTwitter(data)}
      {transformWikidata(data)}
      {transformHomepage(homepage)}
    </div>
  );
};

export default Social;
