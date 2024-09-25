"use client";

import { Button, LogoBadge } from "@cap/ui";
import { useState } from "react";

export const DownloadPage = () => {
  const [loading, setLoading] = useState(false);

  const releaseFetch = async () => {
    setLoading(true);
    const response = await fetch("/api/releases/macos");
    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    }

    setLoading(false);
  };

  return (
    <div className="wrapper wrapper-sm py-32">
      <div className="text-center space-y-4">
        <h1 className="fade-in-down animate-delay-1">Download Cap</h1>
        <p className="fade-in-down animate-delay-2">
          The quickest way to share your screen. Pin to your dock and record in
          seconds.
        </p>
        <div className="fade-in-up animate-delay-2">
          <Button
            spinner={loading}
            onClick={async () => await releaseFetch()}
            className="mb-3"
          >
            Download
          </Button>
          <p className="text-xs text-gray-500">
            Supports both Apple Sillicon & Intel based Macs
          </p>
        </div>
      </div>
    </div>
  );
};
