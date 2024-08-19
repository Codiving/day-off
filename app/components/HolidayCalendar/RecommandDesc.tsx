interface RecommandDescProps {
  description: string[][];
}

export default function RecommandDesc(props: RecommandDescProps) {
  const { description } = props;
  return (
    <div className="px-4 flex flex-col gap-4 sm:gap-10">
      {description.map((list, index) => {
        return (
          <div key={index} className="flex flex-col gap-1">
            {list.map((desc, index) => {
              if (index === 0) {
                return (
                  <p className={"text-sm sm:text-xl"} key={desc}>
                    {desc}
                  </p>
                );
              }

              return (
                <p key={desc} className="text-2xl sm:text-4xl">
                  <span className="text-green-800">{desc}</span> 연차 추천
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
