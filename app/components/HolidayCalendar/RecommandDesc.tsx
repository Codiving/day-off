interface RecommandDescProps {
  description: string[][];
}

export default function RecommandDesc(props: RecommandDescProps) {
  const { description } = props;
  return (
    <div className="px-4">
      {description.map(list =>
        list.map((desc, index) => {
          if (index === 0) {
            return (
              <p className={"text-xl"} key={desc}>
                {desc}
              </p>
            );
          }

          return (
            <p key={desc}>
              <span className="text-green-800">{desc}</span> 연차 추천
            </p>
          );
        })
      )}
    </div>
  );
}
