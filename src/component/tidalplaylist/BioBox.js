import React from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";

const BioBox = () => {
  return (
    <BioInnerBox>
      <Bio>Bio</Bio>
      <BioText>
        Norwegian electronic producer <Cyan>Kygo</Cyan> broke into the
        mainstream in the 2010s with a tropical house sound that he utilized on
        remixes of <Cyan>Seinabo Sey</Cyan>'s "Younger,"{" "}
        <Cyan>Marvin Gaye</Cyan>'s "Sexual Healing," and <Cyan>Ed Sheeran</Cyan>
        's "I See Fire." Building a steady following with singles and live
        performances, he issued his debut, Cloud Nine, in 2016, topping charts
        in Europe and the U.S. and going multi-platinum in his native Norway
        upon the strength of the single "Firestone" with{" "}
        <Cyan>Conrad Sewell</Cyan>. Subsequent hit singles included "It Ain't
        Me" with <Cyan>Selena Gomez</Cyan>, "First Time" with{" "}
        <Cyan>Ellie Goulding</Cyan>, and "Born to Be Yours" with{" "}
        <Cyan>Imagine Dragons</Cyan>.
      </BioText>
      <br />
      <BioText>
        Born Kyrre Gørvell-Dahll in Singapore and raised across multiple
        continents, the <Cyan>Avicii</Cyan>-inspired producer and DJ started
        playing piano as a child, discovering electronic music as a teen. After
        dropping out of college, he decided to pursue music full time. Signed to
        an international deal with Sony that placed him on RCA in the U.S. and
        Syco in the U.K., he released his first proper single, "Firestone," in
        2014. Featuring lead vocals from <Cyan>Conrad Sewell</Cyan>, the song
        not only went to number one in Norway but reached the Top Ten in several
        other territories. The following year, the Parson James collaboration
        "Stole the Show" was <Cyan>Kygo</Cyan>'s second consecutive solo number
        one hit in Norway. Later that year, "Nothing Left," featuring{" "}
        <Cyan>Will Heard</Cyan>, became his third Norwegian chart-topper.
      </BioText>
      <br />
      <BioText>
        These hits, along with additional singles that featured{" "}
        <Cyan>Labrinth</Cyan>,<Cyan>Kodaline</Cyan>, and{" "}
        <Cyan>James Vincent McMorrow</Cyan>, preceded his debut full-length LP,
        Cloud Nine, which was released in May 2016 and quickly went to number
        one in Norway. That month, two tracks he produced with{" "}
        <Cyan>Stargate</Cyan> appeared on <Cyan>Fifth Harmony</Cyan>'s{" "}
        <Cyan>7/27</Cyan>. In February 2017, <Cyan>Kygo</Cyan> released "It
        Ain't Me," a collaboration with American singer{" "}
        <Cyan>Selena Gomez</Cyan> that reached number ten on the Billboard pop
        chart. "First Time," another collaboration, this time with British
        singer <Cyan>Ellie Goulding</Cyan>, quickly followed. Both tracks went
        on to appear on 2017's Stargazing EP. The release also featured a remix
        of the <Cyan>U2</Cyan> song "You're the Best Thing About Me."
      </BioText>
      <br />
      <BioText>
        Later that year, <Cyan>Kygo</Cyan> issued his sophomore follow-up LP,
        Kids in Love. The album featured guests like <Cyan>John Newman</Cyan>{" "}
        ("Never Let You Go"), <Cyan>OneRepublic</Cyan> ("Stranger Things"), and
        <Cyan>Wrabel</Cyan> ("With You"). Released in 2018, the Kids in Love
        (Remixes) LP offered alternate mixes and recut versions of tracks from
        his 2017 album and also included the new song "This Town," featuring
        <Cyan>Gucci Mane</Cyan> and <Cyan>Sasha Sloan</Cyan>. In 2018, Kygo
        teamed with <Cyan>Imagine Dragons</Cyan> for "Born to Be Yours," and
        returned the following year with "Think About You," featuring Valerie
        Broussard. Also in 2019, he scored a dance hit with a remix of{" "}
        <Cyan>Whitney Houston</Cyan>'s "Higher Love." ~ Andy Kellman & Neil Z.
        Yeung
      </BioText>
      <br />
    </BioInnerBox>
  );
};

const BioInnerBox = styled.div`
  margin-top: 50px;
`;
const Bio = styled.div`
  margin-bottom: 30px;
  color: white;
  font-size: 15px;
  font-family: "nationale-bold";
`;
const BioText = styled.p`
  color: white;
  font-size: 12px;
  font-family: "natinale-regular";
`;
const Cyan = styled.a`
  border-bottom: 1px solid cyan;
  color: cyan;
  font-size: 12px;
  font-family: "natinale-regular";
`;

export default BioBox;
