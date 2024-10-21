"use client";
import { Button } from "antd";
export default function FormSubmit({ isSubmitting, onReset }) {
  return (
    <>
      <Button
        type="primary"
        htmlType="submit"
        disabled={isSubmitting}
        loading={isSubmitting}
        className="mr-2"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
      <Button htmlType="button" onClick={onReset}>
        Reset
      </Button>
    </>
  );
}
