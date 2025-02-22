import { Card } from "@/components/ui/card";

export function GithubContributions() {
  return (
    <Card className="p-4 w-full overflow-hidden">
      <img
        src={`https://ghchart.rshah.org/Aamir-Hullur`}
        alt="Sarah Chen's Github Contribution Graph"
        className="w-full h-auto dark:invert"
      />
    </Card>
  );
}

