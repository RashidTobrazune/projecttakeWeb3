async function activityTable(day) {
    // Read the list of log files
    const logFileList = await textFile("camera_logs.txt");
    const logFiles = logFileList.split("\n").filter(file => file.trim() !== "");
    
    // Initialize hourly counts array with zeros
    const hourlyCounts = new Array(24).fill(0);
    
    // Process each log file
    for (const file of logFiles) {
      try {
        const content = await textFile(file.trim());
        const timestamps = content.split("\n").filter(line => line.trim() !== "");
        
        for (const timestampStr of timestamps) {
          const timestamp = Number(timestampStr);
          if (isNaN(timestamp)) continue;
          
          const date = new Date(timestamp);
          if (date.getDay() === day) {
            const hour = date.getHours();
            hourlyCounts[hour]++;
          }
        }
      } catch (error) {
        console.error(`Error processing file ${file}:`, error);
      }
    }
    
    return hourlyCounts;
  }


  