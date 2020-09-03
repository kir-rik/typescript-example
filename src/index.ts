{
  type Params = {
    str: string;
    num: number;
    reverse?: boolean;
  };

  const fn = (obj: Params): string => {
    const { str, num, reverse = false } = obj;

    return reverse ? str + num : num + str;
  };

  const result = fn({
    str: "s",
    num: 1,
  });

  console.log(result);
}
