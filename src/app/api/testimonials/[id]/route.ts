import dbConnect from '@/lib/mongoose';
import Testimonial from '@/models/testimonial';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const _id = params.id;
  try {
    await dbConnect();
    const testimonial = await Testimonial.findById(_id);
    if (!testimonial) {
      return NextResponse.json(
        { error: 'Testimonial not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(testimonial);
  } catch (error) {
    console.error('API: Error fetching testimonial:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const _id = params.id;
  await dbConnect();
  await Testimonial.findByIdAndDelete(_id);
  return NextResponse.json({ message: 'Testimonial deleted successfully' });
}

export async function PATCH(
  request: Request,
  props: { params: Promise<{ id: string }> }) 
{
  const params = await props.params;
  const _id = params.id;
  await dbConnect();
  const body = await request.json();
  await Testimonial.findByIdAndUpdate(_id, body);
  return NextResponse.json({ message: 'Testimonial updated successfully' });
}
