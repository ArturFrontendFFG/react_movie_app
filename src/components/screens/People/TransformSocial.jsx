export const transformInstagram = ({ instagram_id }) => {
  if (instagram_id !== null && instagram_id !== undefined) {
    return (
      <div className="aside__icon-block">
        <a
          target="blank"
          title="Посетить instagram"
          key="instagram"
          className="aside__icon-social aside__icon-social_inst"
          href={`https://www.instagram.com/${instagram_id}`}
        ></a>
      </div>
    );
  }
};
export const transformTikTok = ({ tiktok_id }) => {
  if (tiktok_id !== null && tiktok_id !== undefined) {
    <div className="aside__icon-block">
      <a
        target="blank"
        title="Посетить tiktok"
        key="tiktok"
        className="aside__icon-social aside__icon-social_tt"
        href={`https://www.tiktok.com/${tiktok_id} `}
      ></a>
      ;
    </div>;
  }
};
export const transformTwitter = ({ twitter_id }) => {
  if (twitter_id !== null && twitter_id !== undefined) {
    return (
      <div className="aside__icon-block">
        <a
          target="blank"
          title="Посетить twitter"
          key="twitter"
          className="aside__icon-social aside__icon-social_twit"
          href={`https://www.instagram.com/${twitter_id}`}
        ></a>
      </div>
    );
  }
};
export const transformFacebook = ({ facebook_id }) => {
  if (facebook_id !== null && facebook_id !== undefined) {
    return (
      <div className="aside__icon-block">
        <a
          target="blank"
          title="Посетить facebook"
          key="facebook"
          className="aside__icon-social aside__icon-social_face"
          href={`https://www.instagram.com/${facebook_id}`}
        ></a>
      </div>
    );
  }
};
export const transformWikidata = ({ wikidata_id }) => {
  if (wikidata_id !== null && wikidata_id !== undefined) {
    return (
      <div className="aside__icon-block">
        <a
          target="blank"
          title="Посетить wiki"
          key="wikidata"
          className="aside__icon-social aside__icon-social_wiki"
          href={`https://www.wikidata.org/wiki/${wikidata_id}`}
        ></a>
      </div>
    );
  }
};
export const transformHomepage = (homepage) => {
  if (homepage !== null && homepage !== undefined) {
    return (
      <div className="aside__icon-block">
        <a
          target="blank"
          title="Посетить Homepage"
          key="homepage"
          className="aside__icon-social aside__icon-social_home"
          href={homepage}
        ></a>
      </div>
    );
  }
};
export const transformYoutube = ({youtube_id}) => {
  if (youtube_id !== null && youtube_id !== undefined) {
    return (
      <div className="aside__icon-block">
        <a
          target="blank"
          title="Посетить YouTube"
          key="youtube"
          className="aside__icon-social aside__icon-social_youtube"
          href={`https://www.youtube.com/@${youtube_id}`}
        ></a>
      </div>
    );
  }
};
