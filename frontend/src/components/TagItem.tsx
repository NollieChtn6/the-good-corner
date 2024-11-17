import type { Tag } from "../@types/types";

type TagsProps = {
  tag: Tag;
};

export function TagItem({ tag }: TagsProps) {
  return (
    <div className="tag-item" id={`tag-${tag.id}`}>
      {tag.label}
    </div>
  );
}
