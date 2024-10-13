import type { Tag } from "../@types/types";

type TagsProps = {
	tag: Tag;
};

const TagItem = ({ tag }: TagsProps) => {
	return (
		<div className="tag-item" id={`tag-${tag.id}`}>
			{tag.label}
		</div>
	);
};

export default TagItem;
