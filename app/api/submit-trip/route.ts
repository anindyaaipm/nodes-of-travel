import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Get n8n webhook URL from environment variable
<<<<<<< Updated upstream
    //const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || 'https://andy4work.app.n8n.cloud/webhook/travel';
=======
>>>>>>> Stashed changes
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || 'https://primary-production-b06f.up.railway.app/webhook/travel';
    
    console.log('📤 Sending data to n8n:', n8nWebhookUrl);
    console.log('📦 Data:', JSON.stringify(data, null, 2));
    
    // Forward the request to n8n
    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('📥 n8n response status:', response.status);
    console.log('📥 n8n response statusText:', response.statusText);

    // Try to get response body (even if not JSON)
    let result;
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      result = await response.json();
      console.log('📥 n8n response data:', result);
    } else {
      const text = await response.text();
      console.log('📥 n8n response text:', text);
      result = { message: text };
    }

    if (!response.ok) {
      console.error('❌ n8n returned error:', response.status, result);
      throw new Error(`n8n webhook failed: ${response.status} ${response.statusText}`);
    }

    console.log('✅ Successfully sent to n8n');
    
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully',
      data: result 
    }, { status: 200 });
    
  } catch (error) {
    console.error('❌ Error submitting form:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit form',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

