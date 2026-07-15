import { FieldActions } from './FieldActions.jsx';

export default function TextBlockControls({ label, onToggle, visible }) {
  return (
    <FieldActions
      isHidden={!visible}
      label={label}
      onToggle={onToggle}
    />
  );
}
