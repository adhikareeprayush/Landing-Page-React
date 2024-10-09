import Button from './Components/Button/Button'

function App() {

  return (
    <div className="flex gap-3 items-start">
      {/* Default Secondary Button */}
      <div className="p-8 space-y-4 w-[300px]">
        <h3>Default Buttons</h3>

        {/* Primary Button */}
        <Button
          text="Primary Button"
          type="primary"
        />

        {/* Secondary Button */}
        <Button
          text="Secondary Button"
          type="secondary"
        />

        {/* Info Button */}
        <Button
          text="Info Button"
          type="info"
        />

        {/* Success Button */}
        <Button
          text="Success Button"
          type="success"
        />

        {/* Warning Button */}
        <Button
          text="Warning Button"
          type="warning"
        />

        {/* Danger Button */}
        <Button
          text="Danger Button"
          type="danger"
        />

      </div>
      <div className="p-8 space-y-4 w-[350px]">
        <h3>Disabled Buttons</h3>
        {/* Primary Button */}
        <Button
          text="Primary Button"
          type="primary"
          disabled={true}
        />

        {/* Secondary Button */}
        <Button
          text="Secondary Button"
          type="secondary"
          disabled={true}
        />

        {/* Success Button */}
        <Button
          text="Info Button"
          type="info"
          disabled={true}
        />

        {/* Warning Button */}
        <Button
          text="Success Button"
          type="success"
          disabled={true}
        />

        {/* Danger Button */}
        <Button
          text="Warning Button"
          type="warning"
          disabled={true}
        />

        <Button
          text="Danger Button"
          type="danger"
          disabled={true}
        />

      </div>
      <div className="p-8 space-y-4 w-[350px] flex flex-col items-start">
        <h3>Ghost Buttons</h3>
        {/* Primary Button */}
        <Button
          text="Primary Button"
          type="primary"
          ghost={true}
        />

        {/* Secondary Button */}
        <Button
          text="Secondary Button"
          type="secondary"
          ghost={true}
        />

        {/* Info Button */}
        <Button
          text="Info Button"
          type="info"
          ghost={true}
        />

        {/* Success Button */}
        <Button
          text="Success Button"
          type="success"
          ghost={true}
        />

        {/* Warning Button */}
        <Button
          text="Warning Button"
          type="warning"
          ghost={true}
        />

        {/* Danger Button */}
        <Button
          text="Danger Button"
          type="danger"
          ghost={true}
        />
      </div>

      <div className="p-8 space-y-4 w-[350px] flex flex-col items-start">
        <h3>Dropdown Buttons</h3>
        <Button
          text="Dropdown Button"
          type="secondary"
          dropdownItems={[
            { label: "Item 1", value: 1 },
            { label: "Item 2", value: 2 },
            { label: "Item 3", value: 3 },
          ]}
        />

      </div>

    </div>

  )
}

export default App
